import { useCallback, useEffect, useState } from "react";
import {
  createStudent,
  deleteStudent,
  getStudents,
  updateStudent,
} from "../api";

const EMPTY = { name: "", course: "", age: "" };

function studentBody(form) {
  const age = form.age === "" ? "" : Number(form.age);
  if (typeof age === "number" && !Number.isFinite(age)) {
    throw new Error("Age has to be a number.");
  }
  return {
    name: form.name.trim(),
    course: form.course.trim(),
    age,
  };
}

function formatDate(value) {
  if (!value) return "—";
  return new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function byNewest(a, b) {
  return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
}

function StudentsScreen({ session, onLogout }) {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState(EMPTY);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState(EMPTY);
  const [confirmId, setConfirmId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const handleFailure = useCallback(
    (err) => {
      if (err.status === 401) onLogout();
      else setError(err.message || "Something went wrong");
    },
    [onLogout],
  );

  const reload = useCallback(async () => {
    const data = await getStudents(session.token);
    setStudents([...(data.students || [])].sort(byNewest));
  }, [session.token]);

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const data = await getStudents(session.token);
        if (!ignore) {
          setStudents([...(data.students || [])].sort(byNewest));
        }
      } catch (err) {
        if (!ignore) handleFailure(err);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, [session.token, handleFailure]);

  function updateForm(setter, field, value) {
    setter((current) => ({ ...current, [field]: value }));
  }

  async function handleCreate(event) {
    event.preventDefault();
    setError("");
    setNotice("");
    setBusy(true);
    try {
      const data = await createStudent(session.token, studentBody(form));
      setForm(EMPTY);
      setNotice(data.message || "Student created successfully");
      await reload();
    } catch (err) {
      handleFailure(err);
    } finally {
      setBusy(false);
    }
  }

  function startEdit(student) {
    setConfirmId(null);
    setEditingId(student._id);
    setEditForm({
      name: student.name,
      course: student.course,
      age: String(student.age ?? ""),
    });
  }

  function cancelEdit() {
    setEditingId(null);
    setEditForm(EMPTY);
  }

  async function handleUpdate(event) {
    event.preventDefault();
    setError("");
    setNotice("");
    setBusy(true);
    try {
      const data = await updateStudent(
        session.token,
        editingId,
        studentBody(editForm),
      );
      setNotice(data.message || "Student updated successfully");
      cancelEdit();
      await reload();
    } catch (err) {
      handleFailure(err);
    } finally {
      setBusy(false);
    }
  }

  async function handleDelete(id) {
    setError("");
    setNotice("");
    setBusy(true);
    try {
      const data = await deleteStudent(session.token, id);
      if (editingId === id) cancelEdit();
      setConfirmId(null);
      setNotice(data.message || "Student deleted successfully");
      await reload();
    } catch (err) {
      handleFailure(err);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <div>
            <p className="eyebrow">Student registry</p>
            <p className="who">
              <strong>{session.name}</strong>
              {session.email ? <span>{session.email}</span> : null}
            </p>
          </div>
          <button type="button" className="ghost" onClick={onLogout}>
            Log out
          </button>
        </div>
      </header>

      <main className="page">
        <section className="composer">
          <div className="section-heading">
            <h1>New student</h1>
            <p>Sends name, course, and age to POST /api/students.</p>
          </div>
          <form className="composer-form" onSubmit={handleCreate}>
            <label>
              Name
              <input
                value={form.name}
                onChange={(event) =>
                  updateForm(setForm, "name", event.target.value)
                }
                placeholder="Asha Menon"
              />
            </label>
            <label>
              Course
              <input
                value={form.course}
                onChange={(event) =>
                  updateForm(setForm, "course", event.target.value)
                }
                placeholder="Web development"
              />
            </label>
            <label>
              Age
              <input
                inputMode="numeric"
                value={form.age}
                onChange={(event) =>
                  updateForm(setForm, "age", event.target.value)
                }
                placeholder="21"
              />
            </label>
            <button className="primary" type="submit" disabled={busy}>
              Add student
            </button>
          </form>
        </section>

        <section className="roster">
          <div className="section-heading row">
            <div>
              <h2>Roster</h2>
              <p>Loaded with GET /api/students.</p>
            </div>
            <span className="count">
              {loading ? "…" : students.length}
            </span>
          </div>

          {error ? (
            <p className="banner bad" role="alert">
              {error}
            </p>
          ) : null}
          {notice ? (
            <p className="banner good" role="status">
              {notice}
            </p>
          ) : null}

          {loading ? (
            <div className="skeleton" aria-busy="true" aria-live="polite">
              <span />
              <span />
              <span />
            </div>
          ) : students.length === 0 ? (
            <p className="empty">No students yet. Add the first one above.</p>
          ) : (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Age</th>
                    <th>Added</th>
                    <th>
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => {
                    const editing = editingId === student._id;
                    const confirming = confirmId === student._id;
                    return (
                      <tr key={student._id}>
                        <td data-label="Name">
                          {editing ? (
                            <input
                              aria-label="Name"
                              value={editForm.name}
                              onChange={(event) =>
                                updateForm(setEditForm, "name", event.target.value)
                              }
                            />
                          ) : (
                            student.name
                          )}
                        </td>
                        <td data-label="Course">
                          {editing ? (
                            <input
                              aria-label="Course"
                              value={editForm.course}
                              onChange={(event) =>
                                updateForm(
                                  setEditForm,
                                  "course",
                                  event.target.value,
                                )
                              }
                            />
                          ) : (
                            <span className="course">{student.course}</span>
                          )}
                        </td>
                        <td data-label="Age">
                          {editing ? (
                            <input
                              aria-label="Age"
                              inputMode="numeric"
                              value={editForm.age}
                              onChange={(event) =>
                                updateForm(setEditForm, "age", event.target.value)
                              }
                            />
                          ) : (
                            student.age
                          )}
                        </td>
                        <td data-label="Added">{formatDate(student.createdAt)}</td>
                        <td className="actions">
                          {editing ? (
                            <>
                              <button
                                type="button"
                                className="primary small"
                                disabled={busy}
                                onClick={handleUpdate}
                              >
                                Save
                              </button>
                              <button
                                type="button"
                                className="ghost small"
                                onClick={cancelEdit}
                              >
                                Cancel
                              </button>
                            </>
                          ) : confirming ? (
                            <>
                              <button
                                type="button"
                                className="danger small"
                                disabled={busy}
                                onClick={() => handleDelete(student._id)}
                              >
                                Delete
                              </button>
                              <button
                                type="button"
                                className="ghost small"
                                onClick={() => setConfirmId(null)}
                              >
                                Keep
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                type="button"
                                className="ghost small"
                                onClick={() => startEdit(student)}
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                className="ghost small danger-text"
                                onClick={() => {
                                  cancelEdit();
                                  setConfirmId(student._id);
                                }}
                              >
                                Delete
                              </button>
                            </>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default StudentsScreen;

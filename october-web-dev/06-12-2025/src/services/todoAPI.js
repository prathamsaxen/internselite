const BASE_URL = "http://localhost:3000/api/todos"; // change if needed

export async function getTodos() {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function addTodo(todo) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  return res.json();
}

export async function updateTodo(id, updatedData) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  return res.json();
}

export async function deleteTodo(id) {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
}

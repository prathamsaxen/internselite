// Calls match sep-web-dev-batch/04-october-2026/server.js.
// Vite forwards /api to http://localhost:3000. The student routes expect the
// raw JWT in the Authorization header, not a "Bearer " prefix.

async function request(path, { method = "GET", body, token } = {}) {
  if (token && isExpired(token)) {
    const error = new Error("Your session expired. Log in again.");
    error.status = 401;
    throw error;
  }

  const headers = {};
  if (body !== undefined) headers["Content-Type"] = "application/json";
  if (token) headers.Authorization = token;

  let response;
  try {
    response = await fetch(path, {
      method,
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new Error(
      "Could not reach the API. Start the October 4 server on port 3000 and try again.",
    );
  }

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(data.message || "Request failed");
    error.status = response.status;
    throw error;
  }
  return data;
}

function decodePayload(token) {
  const segment = token.split(".")[1];
  if (!segment) throw new Error("Invalid token");
  const base64 = segment.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
  return JSON.parse(atob(padded));
}

function isExpired(token) {
  try {
    const payload = decodePayload(token);
    return Boolean(payload.exp) && payload.exp * 1000 < Date.now();
  } catch {
    return true;
  }
}

export function loadSession() {
  const token = localStorage.getItem("token");
  if (!token || isExpired(token)) {
    localStorage.removeItem("token");
    return null;
  }
  try {
    const payload = decodePayload(token);
    return {
      token,
      name: payload.userName || "Signed in",
      email: payload.userEmail || "",
    };
  } catch {
    localStorage.removeItem("token");
    return null;
  }
}

export function saveSession(token) {
  localStorage.setItem("token", token);
  return loadSession();
}

export function clearSession() {
  localStorage.removeItem("token");
}

export function signup({ name, email, password }) {
  return request("/api/signup", {
    method: "POST",
    body: { name, email, password },
  });
}

export function login({ email, password }) {
  return request("/api/login", {
    method: "POST",
    body: { email, password },
  });
}

export function getStudents(token) {
  return request("/api/students", { token });
}

export function createStudent(token, student) {
  return request("/api/students", {
    method: "POST",
    token,
    body: student,
  });
}

export function updateStudent(token, id, student) {
  return request(`/api/students/${id}`, {
    method: "PUT",
    token,
    body: student,
  });
}

export function deleteStudent(token, id) {
  return request(`/api/students/${id}`, {
    method: "DELETE",
    token,
  });
}

export function sendToDB(tableName = "client", id = null, data) {
  payload = {
    tableName: tableName,
    id: id,
    data: data,
  };
  fetch(env.process.API_URL, {
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(payload),
  });
}

export function getFromDB(tableName = "client", id = null) {
  payload = {
    tableName: tableName,
    id: id,
  };
  fetch(env.process.API_URL, {
    method: "GET",
    mode: "no-cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(payload),
  });
}

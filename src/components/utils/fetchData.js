export async function postReaquest(url, body, Authorization) {
  console.log(JSON.stringify(body));
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: Authorization,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  try {
    let response = await fetch(url, requestOptions);
    let data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
export async function getReaquest(url, Authorization) {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: Authorization,
      "Content-Type": "application/json",
    },
  };
  try {
    let response = await fetch(url, requestOptions);
    let data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export const _Authorization =
  "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzE4MzZmY2UxNzFkZTZjNWM5NjE4NzMiLCJwaG9uZU51bWJlciI6Iis5OTg5OTM0NjY3ODgiLCJpYXQiOjE2NjI1NzQ3NTgsImV4cCI6MTY2MzE3OTU1OH0.EPtYR-1mSY13c4ZHCNfa1x_RM3BvyGvuqzYRuRVofXU";

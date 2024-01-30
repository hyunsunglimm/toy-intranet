import client from "./client";

const assetsUrl =
  "https://y3b22irq.api.sanity.io/v2021-03-25/assets/images/production";

export async function addEmployee({
  name,
  email,
  age,
  department,
  file,
  workingHours,
}) {
  return fetch(assetsUrl, {
    method: "POST",
    headers: {
      "content-type": file.type,
      authorization:
        "Bearer skEROsDDFhTiALmkyI9ZD1wGWlcQAlqpnEtXBF3JrKOzpt5BRSKA0BHwPZW4GrRxf05eJZU8qyGDVgJclSrqNaRzG72q26rMGVjih8zq8LwsGs5J192LRRsKiYJtfQOV9sjB81cOF8nTCQt2DE7xHOTdbnID45tUttVJxFBLYFwdX02wxUK5",
    },
    body: file,
  })
    .then((res) => res.json())
    .then((result) => {
      return client.create({
        _type: "employee",
        name,
        email,
        age,
        department,
        image: { asset: { _ref: result.document._id } },
        isWorking: false,
        workingHours,
      });
    });
}

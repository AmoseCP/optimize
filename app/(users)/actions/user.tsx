// 'use server'

// export async function updateUser({ userId, formData }: { userId: string, formData: FormData }) {
//   'use server'
//   const rawFormData = {
//     userId: formData.get('userId'),
//     username: formData.get('username'),
//     password: formData.get('password'),
//   }

//   const response = await fetch(`/api/users/${userId}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   });
//   return response.json();
// }

export async function updateUser(formData: FormData) {
  const username  = formData.get('username');
  const password = formData.get('password');
  console.log(username);
  console.log("password", password);
  return {"error": "Not implemented"};
}
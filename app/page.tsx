'use client'

import { updateUser } from "./(users)/actions/user";
import SubmitButton from './components/buttons/submit-button';

export default function Home() {
  // const updateUserWithId = updateUser.bind(null, formData);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-5xl font-bold mb-6 text-center">Login</h1>
        <div>
          <form action={updateUser}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="username">Username* :</label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type="text" name="username" placeholder="user name" required/>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">Password* :</label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md" type="password" name="password" placeholder="password" required/>
            </div>
            <SubmitButton text="Login" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"/>
          </form>
        </div>
      </div>
    </main>
  );
}

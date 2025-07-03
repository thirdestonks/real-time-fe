// components/settings/Password.tsx

export default function Password() {
    return (
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Change Password</h2>

            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Current Password
                    </label>
                    <input
                        type="password"
                        className="w-full bg-gray-900 border border-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        New Password
                    </label>
                    <input
                        type="password"
                        className="w-full bg-gray-900 border border-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Confirm New Password
                    </label>
                    <input
                        type="password"
                        className="w-full bg-gray-900 border border-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
                    >
                        Update Password
                    </button>
                </div>
            </form>
        </section>
    )
}

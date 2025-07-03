export default function Account() {
    return (
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Account Settings</h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Username */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Username
                    </label>
                    <input
                        type="text"
                        placeholder="yourusername"
                        className="w-full bg-gray-900 border border-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* Full name */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="Your full name"
                        className="w-full bg-gray-900 border border-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* Email */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full bg-gray-900 border border-gray-700 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* Save Button */}
                <div className="md:col-span-2 flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </section>
    )
}

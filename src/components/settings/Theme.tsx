// components/settings/Theme.tsx

const colors = ['green', 'blue', 'purple', 'pink', 'gray']

export default function Theme() {
    return (
        <section className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Theme Preferences</h2>

            <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2">
                    Choose Theme Color:
                </h3>
                <div className="flex space-x-3">
                    {colors.map((color) => (
                        <button
                            key={color}
                            className={`w-8 h-8 rounded-full border-2 border-white outline-none focus:ring-2 focus:ring-white bg-${color}-500`}
                            aria-label={`Set theme color to ${color}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    )
}

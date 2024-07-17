
export default function AuthtLayout({ children }) {
    return (
        <main className={`bg-primary min-h-screen flex justify-center items-center px-8`}>
            <div className="grid grid-cols-1 bg-primary_login rounded-2xl px-12 py-6">
                {children}
            </div>
        </main>
    );
}
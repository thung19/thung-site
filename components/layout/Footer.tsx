export default function Footer() {
    return (
        <footer className="border-t border-black/10">
            <div className="mx-auto max-w-4xl px-5 py-8 text-sm text-black/60">
                © {new Date().getFullYear()} Thomas Hung
            </div>
        </footer>
    );
}
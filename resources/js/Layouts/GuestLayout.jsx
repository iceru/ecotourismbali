import Navbar from "@/Components/Navbar";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen container bg-white">
            <div>
                <Navbar />
            </div>

            <div className="py-16">{children}</div>
        </div>
    );
}

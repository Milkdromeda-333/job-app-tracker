import AuthForm from "../components/AuthForm";


export default function Index() {

    return (
        <main className="
            w-full p-4 mt-8 
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            gap-8 md:flex md:flex-row md:justify-end
        ">
            <span className="text-right fontSize-h1 md:w-1/2">
                From Application to Celebration: Your Journey Starts Here!
            </span>

            <AuthForm />
        </main>
    );
}
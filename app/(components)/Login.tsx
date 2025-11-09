import { signIn } from "../(lib)/auth";

function Login() {
  return (
    <form
      className="justify-self-end"
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/account/home" });
      }}
    >
      <button
        type="submit"
        className="bg-gray-900 hover:bg-gray-950 duration-150 px-4 py-1 rounded-md cursor-pointer text-lg"
      >
        Log In
      </button>
    </form>
  );
}

export { Login };

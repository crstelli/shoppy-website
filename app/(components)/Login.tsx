import { Button } from "./Button";
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
      <Button variant="tertiary" className="text-lg" type="submit">
        Log In
      </Button>
    </form>
  );
}

export { Login };

import { Title } from "../(components)/Title";

export const metadata = {
  title: "Shop",
};

export default function page() {
  return (
    <>
      <Title>Contact</Title>
      <div className="self-center text-center mt-20">
        <h2 className="text-3xl">Made only for learning purposes</h2>
        <h3 className="mt-4 text-gray-400">Made with ❤ by crstelly</h3>
        <h4 className="mt-20 text-2xl">cresctelli@gmail.com</h4>
      </div>
    </>
  );
}

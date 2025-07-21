import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-10 md:py-10">
        <h1 className={title()}>About Techra</h1>
        <div className="inline-block max-w-xl text-left justify-center">
          <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
            Founded in 2025 out of a passion for building websites, Techra is
            dedicated to delivering high-quality web solutions quickly and
            efficiently. Our mission is to provide fast, reliable, and effective
            websites and applications, with a focus on clear communication and
            rapid delivery for every client.
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
            We specialize in:
          </p>
          <ul className="mt-2 mb-4 list-disc list-inside text-gray-500 dark:text-gray-400 md:text-lg">
            <li className="mb-2">
              <strong>Web Development:</strong> Custom websites built with
              cutting-edge technologies for exceptional user experiences.
            </li>
            <li className="mb-2">
              <strong>App Development:</strong> Cross-platform mobile
              applications that provide seamless experiences across all devices.
            </li>
            <li className="mb-2">
              <strong>Maintenance & Support:</strong> Ongoing technical support
              and regular updates to keep your digital assets running smoothly.
            </li>
          </ul>
          <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
            At Techra, we value speed, transparency, and communication that
            makes sense to everyone. Our goal is to make the process simple and
            stress-free, so you can focus on what matters most.
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
            Looking ahead, we aim to take on larger and more ambitious projects,
            growing alongside our clients.
          </p>
          <p className="mt-6 text-lg font-semibold text-black dark:text-white">
            Ready to get started?{" "}
            <a href="/contact" className="underline">
              Contact us today
            </a>{" "}
            and let’s build something great together.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}

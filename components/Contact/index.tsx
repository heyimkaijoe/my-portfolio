export default function Contact() {
    return (
        // TODO: ajax setup
        <div id="contact" className="mx-4">
            <h1 className="title mb-6">Contact</h1>
            <form action={import.meta.env.VITE_GETFORM_URL} method="POST" className="flex flex-col gap-2">
                <input type="text" name="name" placeholder="Name" className="input" />
                <input type="email" name="email" placeholder="Email" className="input" />
                <textarea name="message" placeholder="Message" rows={8} className="input" />
                <button type="submit" className="dark-box self-start px-6 py-3 mt-2 font-medium">Work With Me</button>
            </form>
        </div>
    );
}

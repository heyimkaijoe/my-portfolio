export default function Contact() {
    return (
        <div id="contact" className="max-w-md md:max-w-screen-lg mx-auto px-4 md:px-32">
            <h1 className="title mb-6">Contact</h1>
            <form action={import.meta.env.VITE_GETFORM_URL} method="POST" className="flex flex-col gap-2 md:gap-4">
                <input type="text" name="name" placeholder="Name" className="input" />
                <input type="email" name="email" placeholder="Email" className="input" />
                <textarea name="message" placeholder="Message" rows={8} className="input" />
                <button type="submit" className="submit-btn">Work With Me</button>
            </form>
        </div>
    );
}

const Archive = () => {
    return (
        <section>
            <h2>Latest News</h2>
            <ul>
                <li>Workshop with John Doe - March 2025</li>
                <li>Spring Concert Announcement - April 2025</li>
            </ul>
            {/* Embed Google Drive document */}
            <iframe
                src="https://drive.google.com/file/d/your-google-drive-file-id/preview"
                width="640"
                height="480"
                allow="autoplay"
            ></iframe>
        </section>
    );
};

export default Archive;

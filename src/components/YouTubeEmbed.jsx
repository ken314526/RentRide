export default function YouTubeEmbed() {
  return (
    <section className="py-8">
      <h2 className="text-center text-3xl font-bold mb-6">YouTube Video</h2>
      <div className="flex justify-center m-2 py-8">
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/Okb1TjsZlm0?si=uIXK63j-Tk_7X_dm"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

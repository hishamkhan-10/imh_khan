export default function Home() {
  return (
    <>
      <div className="side-accent-left"></div>
      <div className="side-accent-right"></div>
      <div className="accent-line-left"></div>
      <div className="accent-line-right"></div>

      <div className="container">
        {/* Profile Picture */}
        <img src="/profile.jpg" alt="Profile Picture" className="profile-img" />

        {/* Bio */}
        <div className="bio">
          AI/ML Professional | Python, NLP, Testing &amp; BI <br />
           Welcome to me!
        </div>

        {/* Social Media Links */}
        <div className="links-container">
          <a href="https://www.facebook.com/share/1Y3kUe2ZWo/?mibextid=wwXIfr" className="link-btn facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i><span>Hisham Khan</span></a>
          <a href="https://github.com/hishamkhan-10" className="link-btn github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i><span>hishamkhan-10</span></a>
          <a href="https://www.instagram.com/imh_khan?igsh=ajlrdHU5dmt3Y3R5&amp;utm_source=qr" className="link-btn instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i><span>imh_khan</span></a>
          <a href="https://x.com/imh_khan10?s=21&amp;t=eTvWIHiyVv5zSzq8sAL_DA" className="link-btn twitter" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i><span>imh_khan10</span></a>
          <a href="https://snapchat.com/t/EbHnwntx" className="link-btn snapchat" target="_blank" rel="noopener noreferrer"><i className="fab fa-snapchat-ghost"></i><span>imh_khaan</span></a>
          <a href="https://www.linkedin.com/in/hisham-khan-027338207" className="link-btn linkedin" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i><span>HISHAM KHAN</span></a>
        </div>
      </div>
    </>
  );
}

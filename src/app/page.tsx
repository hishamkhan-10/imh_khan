import QRCode from '@/components/QRCode';

export default function Home() {
  return (
    <>
      <div className="side-accent-left"></div>
      <div className="side-accent-right"></div>
      <div className="accent-line-left"></div>
      <div className="accent-line-right"></div>

      {/* Personal Details Panel */}
      <div className="personal-details">
        <div className="details-heading">About Me</div>
        <p><strong>Name:</strong> HISHAM KHAN</p>
        <p><strong>Date Of Birth:</strong> Feb 03, 2001</p>
        <p><strong>Email:</strong> hishamkhan682@gmail.com</p>
      </div>

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
          <a href="https://www.facebook.com/share/1Y3kUe2ZWo/?mibextid=wwXIfr" className="link-btn facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i> Hisham Khan</a>
          <a href="https://github.com/hishamkhan-10" className="link-btn github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> hishamkhan-10</a>
          <a href="https://drive.google.com/drive/folders/1uzgPgVHJ2SlXvxUuvG2zo2Nj3oQE7YuW?dmr=1&amp;ec=wgc-drive-hero-goto" className="link-btn google-drive" target="_blank" rel="noopener noreferrer"><i className="fab fa-google-drive"></i> Google Drive</a>
          <a href="https://www.instagram.com/imh_khan?igsh=ajlrdHU5dmt3Y3R5&amp;utm_source=qr" className="link-btn instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> imh_khan</a>
          <a href="https://x.com/imh_khan10?s=21&amp;t=eTvWIHiyVv5zSzq8sAL_DA" className="link-btn twitter" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i> imh_khan10</a>
          <a href="https://snapchat.com/t/EbHnwntx" className="link-btn snapchat" target="_blank" rel="noopener noreferrer"><i className="fab fa-snapchat-ghost"></i> imh_khaan</a>
          <a href="https://www.linkedin.com/in/hisham-khan-027338207" className="link-btn linkedin" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i> HISHAM KHAN</a>
        </div>

        {/* QR Code Section */}
        <div className="qr-section">
          <QRCode />
        </div>
      </div>
    </>
  );
}

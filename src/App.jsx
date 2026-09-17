import { useState } from "react";
import "./App.css";

function App() {
  const [platformName, setPlatformName] = useState("");
  const [companyName, setCompanyName] = useState("Oracle Corporation");
  const [tagline, setTagline] = useState(
    "Empowering Enterprise Intelligence"
  );

  const [welcomeMessage, setWelcomeMessage] = useState(
    "Welcome to Java Enterprise Suite.\nPlease authenticate to continue."
  );

  const [footerText, setFooterText] = useState(
    "System Maintained by IT Dept."
  );

  const [copyrightText, setCopyrightText] = useState(
    "© 2024 platform branding. All rights reserved."
  );

  const [primaryColor, setPrimaryColor] = useState("#1976D2");
  const [secondaryColor, setSecondaryColor] = useState("#FFFFFF");
  const [accentColor, setAccentColor] = useState("#4CAF50");

  const [theme, setTheme] = useState("light");
  const [strongPassword, setStrongPassword] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  const [backgroundImage, setBackgroundImage] = useState(null);
  const [logoImage, setLogoImage] = useState(null);
  const [faviconImage, setFaviconImage] = useState(null);
  const [emailLogo, setEmailLogo] = useState(null);

  const uploadImage = (event, setter) => {
    const file = event.target.files[0];

    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be below 5MB.");
      return;
    }

    const url = URL.createObjectURL(file);
    setter(url);
  };

  const saveChanges = () => {
    if (!platformName.trim()) {
      alert("Platform name is required");
      return;
    }

    if (tagline.length > 120) {
      alert("Tagline must be fewer than 120 characters");
      return;
    }

    const data = {
      platformName,
      companyName,
      tagline,
      welcomeMessage,
      footerText,
      copyrightText,
      primaryColor,
      secondaryColor,
      accentColor,
      theme,
      strongPassword,
      twoFactor,
    };

    localStorage.setItem("platformBranding", JSON.stringify(data));

    alert("Changes saved successfully!");
  };

  const cancelChanges = () => {
    setPlatformName("");
    setCompanyName("Oracle Corporation");
    setTagline("Empowering Enterprise Intelligence");
    setWelcomeMessage(
      "Welcome to Java Enterprise Suite.\nPlease authenticate to continue."
    );
    setFooterText("System Maintained by IT Dept.");
    setCopyrightText("© 2024 platform branding. All rights reserved.");
    setPrimaryColor("#1976D2");
    setSecondaryColor("#FFFFFF");
    setAccentColor("#4CAF50");
    setTheme("light");
    setStrongPassword(true);
    setTwoFactor(false);
  };

  const previewChanges = () => {
    alert(
      `Platform Preview\n\n${
        platformName || "Platform Name"
      }\n${tagline}`
    );
  };

  return (
    <div className={`app ${theme}`}>

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="stackly-logo">
          <div className="stackly-symbol">S</div>

          <div>
            <h2>STACKLY</h2>
            <span>PLATFORM ADMINISTRATION</span>
          </div>
        </div>

        <div className="menu-section">
          <p>SUPER ADMIN MANAGEMENT</p>

          <div className="menu-item">
            <span>▦</span>
            Super Admin Dashboard
          </div>

          <div className="menu-item">
            <span>◉</span>
            Platform Administration
          </div>

          <div className="menu-item">
            <span>◉</span>
            Global Dashboard
          </div>

          <div className="menu-item">
            <span>⚙</span>
            Platform Configuration
          </div>

          <div className="menu-item active">
            <span>▦</span>
            Platform Branding
          </div>

          <div className="menu-item">
            <span>▤</span>
            Feature Management
          </div>

          <div className="menu-item">
            <span>▣</span>
            License Management
          </div>

          <div className="menu-item">
            <span>☷</span>
            Settings
          </div>
        </div>

        <div className="menu-section organization">
          <p>ORGANIZATION</p>

          <div className="menu-item">
            <span>▣</span>
            Company Setup
          </div>

          <div className="menu-item">
            <span>♙</span>
            User Management
          </div>
        </div>

        <div className="sidebar-bottom">

          <div className="language">
            <span>◎</span>
            <span>Language</span>
            <span className="english">English⌄</span>
          </div>

          <div className="logout">
            <span>↪</span>
            Log out
          </div>

          <div className="admin-profile">
            <div className="admin-avatar">R</div>

            <div>
              <strong>Renu Kapoor</strong>
              <small>Super Admin</small>
            </div>
          </div>

        </div>
      </aside>

      {/* MAIN */}
      <main className="main">

        {/* TOP BAR */}
        <header className="topbar">

          <div className="search-box">
            <span>⌕</span>

            <input
              placeholder="Search tenants, users, settings, audit logs..."
            />

            <kbd>⌘K</kbd>
          </div>

          <div className="top-right">

            <button className="top-icon">♧</button>
            <button className="top-icon">⚙</button>

            <div className="top-user">
              <div className="top-avatar">R</div>

              <div>
                <strong>Renu Kapoor</strong>
                <small>Super Admin</small>
              </div>

              <span>⌄</span>
            </div>

          </div>
        </header>

        {/* CONTENT */}
        <div className="page">

          {/* LEFT */}
          <div className="left-column">

            {/* PLATFORM IDENTITY */}
            <section className="panel">

              <div className="panel-title">
                <h2>Platform Identity</h2>
                <span>Basic Info</span>
              </div>

              <div className="identity-grid">

                <div className="input-group full">
                  <label>Platform Name</label>

                  <input
                    value={platformName}
                    onChange={(e) =>
                      setPlatformName(e.target.value)
                    }
                    className={!platformName ? "error-input" : ""}
                  />

                  {!platformName && (
                    <small className="error-text">
                      Platform name is required
                    </small>
                  )}
                </div>

                <div className="input-group">
                  <label>Company Name</label>

                  <input
                    value={companyName}
                    onChange={(e) =>
                      setCompanyName(e.target.value)
                    }
                  />
                </div>

                <div className="input-group">
                  <label>Tagline</label>

                  <input
                    value={tagline}
                    onChange={(e) =>
                      setTagline(e.target.value)
                    }
                    className={
                      tagline.length > 120 ? "error-input" : ""
                    }
                  />

                  {tagline.length > 120 && (
                    <small className="error-text">
                      Tagline must be fewer than 120 characters
                    </small>
                  )}
                </div>

              </div>
            </section>

            {/* VISUAL ASSETS */}
            <section className="panel">

              <div className="panel-title">
                <h2>Visual Assets</h2>
              </div>

              <div className="visual-grid">

                <div>

                  <div className="asset-heading">
                    <strong>▧ Company Logo</strong>
                    <span>PNG, SVG up to 5MB.</span>
                  </div>

                  <div className="logo-upload">

                    {logoImage ? (
                      <img src={logoImage} alt="Company Logo" />
                    ) : (
                      <div className="demo-logo">
                        <span>✦</span>

                        <div>
                          <strong>SYNERGY</strong>
                          <small>ENTERPRISE SOFTWARE</small>
                        </div>
                      </div>
                    )}

                    <label className="upload-outline">
                      Upload Logo

                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={(e) =>
                          uploadImage(e, setLogoImage)
                        }
                      />
                    </label>

                  </div>

                </div>

                <div className="right-assets">

                  <div className="asset-heading">
                    <strong>Favicon</strong>
                  </div>

                  <div className="favicon-row">

                    <div className="favicon-preview">
                      {faviconImage ? (
                        <img src={faviconImage} alt="Favicon" />
                      ) : (
                        "S"
                      )}
                    </div>

                    <label className="small-upload">
                      Upload Favicon

                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={(e) =>
                          uploadImage(e, setFaviconImage)
                        }
                      />
                    </label>

                  </div>

                  <div className="asset-heading email-heading">
                    <strong>Email Header Logo</strong>
                  </div>

                  <div className="email-row">

                    <div className="email-upload">
                      {emailLogo
                        ? "Image selected"
                        : "No file chosen"}
                    </div>

                    <label className="small-upload">
                      Upload File

                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={(e) =>
                          uploadImage(e, setEmailLogo)
                        }
                      />
                    </label>

                  </div>

                </div>

                <div className="input-group">
                  <label>Footer Text</label>

                  <input
                    value={footerText}
                    onChange={(e) =>
                      setFooterText(e.target.value)
                    }
                  />

                  <span className="character-count">
                    {footerText.length}/200
                  </span>
                </div>

                <div className="input-group">
                  <label>Copyright Text</label>

                  <input
                    value={copyrightText}
                    onChange={(e) =>
                      setCopyrightText(e.target.value)
                    }
                  />
                </div>

              </div>
            </section>

            {/* THEME */}
            <section className="panel theme-panel">

              <div className="panel-title">
                <h2>Theme Configuration</h2>
              </div>

              <div className="theme-row">

                <strong>Theme</strong>

                <div className="theme-buttons">

                  <button
                    className={
                      theme === "light" ? "selected" : ""
                    }
                    onClick={() => setTheme("light")}
                  >
                    ☼ Light mode
                  </button>

                  <button
                    className={
                      theme === "dark" ? "selected" : ""
                    }
                    onClick={() => setTheme("dark")}
                  >
                    ☾ Dark mode
                  </button>

                </div>

              </div>

              <div className="color-grid">

                <ColorInput
                  title="Primary Color"
                  color={primaryColor}
                  setColor={setPrimaryColor}
                />

                <ColorInput
                  title="Secondary Color"
                  color={secondaryColor}
                  setColor={setSecondaryColor}
                />

                <ColorInput
                  title="Accent Color"
                  color={accentColor}
                  setColor={setAccentColor}
                />

              </div>

            </section>

          </div>

          {/* RIGHT */}
          <div className="right-column">

            {/* LOGIN BACKGROUND */}
            <section className="panel login-panel">

              <div className="panel-title">

                <h2>Login Background</h2>

                <label className="change-image">
                  Change Image

                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(e) =>
                      uploadImage(e, setBackgroundImage)
                    }
                  />
                </label>

              </div>

              <div className="login-preview">

                {backgroundImage && (
                  <img
                    src={backgroundImage}
                    alt="Background"
                    className="background-img"
                  />
                )}

                <div className="login-card">

                  <div className="fake-input"></div>
                  <div className="fake-input wide"></div>
                  <div className="fake-input wide"></div>
                  <div className="fake-button"></div>

                </div>

              </div>

              <div className="welcome-section">

                <label>Welcome Message</label>

                <textarea
                  value={welcomeMessage}
                  onChange={(e) =>
                    setWelcomeMessage(e.target.value)
                  }
                />

                <span>
                  {welcomeMessage.length}/250
                </span>

              </div>

            </section>

            {/* SECURITY */}
            <section className="panel security-panel">

              <div className="security-title">
                <h2>♧ Security & Rules</h2>
              </div>

              <h4>VALIDATION RULES</h4>

              <div className="rule">
                <span>✓</span>

                <div>
                  Images: PNG, JPG, SVG max 5MB.
                  <br />
                  Background max 10MB.
                </div>
              </div>

              <div className="rule">
                <span>✓</span>

                <div>
                  Text fields max 100 chars; Messages
                  <br />
                  max 250 chars.
                </div>
              </div>

              <div className="rule">
                <span>✓</span>

                <div>
                  Colors must be valid hex values.
                </div>
              </div>

              <hr />

              <h4>SECURITY HANDLING</h4>

              <div className="rule">
                <span>♧</span>
                <div>Super Admin (RBAC) access only.</div>
              </div>

              <div className="rule">
                <span>◷</span>
                <div>All changes logged to Audit Trail.</div>
              </div>

              <div className="security-toggles">

                <div className="toggle-item">

                  <div>
                    <strong>Strong Password</strong>
                    <small>Require secure passwords</small>
                  </div>

                  <label className="switch">

                    <input
                      type="checkbox"
                      checked={strongPassword}
                      onChange={(e) =>
                        setStrongPassword(e.target.checked)
                      }
                    />

                    <span></span>

                  </label>

                </div>

                <div className="toggle-item">

                  <div>
                    <strong>Two Factor Authentication</strong>
                    <small>Extra login verification</small>
                  </div>

                  <label className="switch">

                    <input
                      type="checkbox"
                      checked={twoFactor}
                      onChange={(e) =>
                        setTwoFactor(e.target.checked)
                      }
                    />

                    <span></span>

                  </label>

                </div>

              </div>

            </section>

          </div>

        </div>

        {/* BOTTOM ACTION BAR */}
        <footer className="action-bar">

          <div className="action-buttons">

            <button
              className="cancel-btn"
              onClick={cancelChanges}
            >
              Cancel
            </button>

            <button
              className="preview-btn"
              onClick={previewChanges}
            >
              Preview
            </button>

            <button
              className="save-btn"
              onClick={saveChanges}
            >
              ▣ Save Changes
            </button>

          </div>

        </footer>

      </main>
    </div>
  );
}

function ColorInput({ title, color, setColor }) {
  return (
    <div className="color-input-group">

      <label>{title}</label>

      <div className="color-control">

        <input
          type="color"
          value={color}
          onChange={(e) =>
            setColor(e.target.value)
          }
        />

        <input
          value={color}
          onChange={(e) =>
            setColor(e.target.value)
          }
        />

      </div>

    </div>
  );
}

export default App;
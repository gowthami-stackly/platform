import React, { useState } from "react";
import "./App.css";

function App() {
  const [platformName, setPlatformName] = useState("Java Enterprise Suite");
  const [companyName, setCompanyName] = useState("Oracle Corporation");
  const [tagline, setTagline] = useState(
    "Empowering Enterprise Intelligence"
  );

  const [footerText, setFooterText] = useState(
    "System Maintained by IT Dept."
  );

  const [copyrightText, setCopyrightText] = useState(
    "© 2024 platform branding. All rights reserved."
  );

  const [welcomeMessage, setWelcomeMessage] = useState(
    "Welcome to Java Enterprise Suite.\nPlease authenticate to continue."
  );

  const [primaryColor, setPrimaryColor] = useState("#1976D2");
  const [secondaryColor, setSecondaryColor] = useState("#FFFFFF");
  const [accentColor, setAccentColor] = useState("#16A085");

  const [theme, setTheme] = useState("light");

  const [strongPassword, setStrongPassword] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);

  const [logoImage, setLogoImage] = useState("");
  const [faviconImage, setFaviconImage] = useState("");
  const [emailLogo, setEmailLogo] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");

  const [showFaviconModal, setShowFaviconModal] = useState(false);
  const [faviconFile, setFaviconFile] = useState(null);
  const [faviconPreview, setFaviconPreview] = useState("");

  const [showLogoModal, setShowLogoModal] = useState(false);

  const uploadImage = (event, setter) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setter(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleFaviconFile = (file) => {
    if (!file) return;

    const validTypes = [
      "image/png",
      "image/x-icon",
      "image/vnd.microsoft.icon",
    ];

    const extension = file.name.toLowerCase().split(".").pop();

    if (!validTypes.includes(file.type) && extension !== "ico") {
      alert("Please upload PNG or ICO file only.");
      return;
    }

    setFaviconFile(file);

    const reader = new FileReader();

    reader.onload = () => {
      setFaviconPreview(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleFaviconUpload = () => {
    if (!faviconFile) {
      alert("Please select a favicon first.");
      return;
    }

    setFaviconImage(faviconPreview);
    setShowFaviconModal(false);
  };

  const closeFaviconModal = () => {
    setFaviconFile(null);
    setFaviconPreview("");
    setShowFaviconModal(false);
  };

  const saveChanges = () => {
    if (!platformName.trim()) {
      alert("Platform name is required");
      return;
    }

    const data = {
      platformName,
      companyName,
      tagline,
      footerText,
      copyrightText,
      welcomeMessage,
      primaryColor,
      secondaryColor,
      accentColor,
      theme,
      strongPassword,
      twoFactor,
      logoImage,
      faviconImage,
      emailLogo,
      backgroundImage,
    };

    localStorage.setItem("platformBranding", JSON.stringify(data));

    alert("Platform branding saved successfully!");
  };

  const cancelChanges = () => {
    const saved = localStorage.getItem("platformBranding");

    if (saved) {
      const data = JSON.parse(saved);

      setPlatformName(data.platformName || "");
      setCompanyName(data.companyName || "");
      setTagline(data.tagline || "");
      setFooterText(data.footerText || "");
      setCopyrightText(data.copyrightText || "");
      setWelcomeMessage(data.welcomeMessage || "");
      setPrimaryColor(data.primaryColor || "#1976D2");
      setSecondaryColor(data.secondaryColor || "#FFFFFF");
      setAccentColor(data.accentColor || "#16A085");
      setTheme(data.theme || "light");
      setStrongPassword(
        data.strongPassword !== undefined ? data.strongPassword : true
      );
      setTwoFactor(
        data.twoFactor !== undefined ? data.twoFactor : true
      );
      setLogoImage(data.logoImage || "");
      setFaviconImage(data.faviconImage || "");
      setEmailLogo(data.emailLogo || "");
      setBackgroundImage(data.backgroundImage || "");
    } else {
      setPlatformName("Java Enterprise Suite");
      setCompanyName("Oracle Corporation");
      setTagline("Empowering Enterprise Intelligence");
      setFooterText("System Maintained by IT Dept.");
      setCopyrightText(
        "© 2024 platform branding. All rights reserved."
      );
      setWelcomeMessage(
        "Welcome to Java Enterprise Suite.\nPlease authenticate to continue."
      );
      setPrimaryColor("#1976D2");
      setSecondaryColor("#FFFFFF");
      setAccentColor("#16A085");
      setTheme("light");
      setStrongPassword(true);
      setTwoFactor(true);
      setLogoImage("");
      setFaviconImage("");
      setEmailLogo("");
      setBackgroundImage("");
    }
  };

  const previewChanges = () => {
    alert(
      `Platform Preview\n\n${platformName}\n${tagline}\n\nTheme: ${theme}`
    );
  };

  return (
    <div className={`app ${theme === "dark" ? "dark-theme" : ""}`}>
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-logo">⚡</div>

          <div>
            <div className="brand-name">STACKLY</div>
          </div>
        </div>

        <div className="sidebar-section-title">
          PLATFORM ADMINISTRATION
        </div>

        <div className="sidebar-section-title second-title">
          SUPER ADMIN MANAGEMENT
        </div>

        <nav className="sidebar-nav">
          <div className="nav-item">
            <span>▦</span>
            Super Admin Dashboard
          </div>

          <div className="nav-item">
            <span>◉</span>
            Platform Administration
          </div>

          <div className="nav-item">
            <span>◉</span>
            Global Dashboard
          </div>

          <div className="nav-item">
            <span>◉</span>
            Platform Configuration
          </div>

          <div className="nav-item active">
            <span>▣</span>
            Platform Branding
          </div>

          <div className="nav-item">
            <span>◈</span>
            Feature Management
          </div>

          <div className="nav-item">
            <span>▤</span>
            License Management
          </div>

          <div className="nav-item">
            <span>⚙</span>
            Settings
          </div>
        </nav>

        <div className="sidebar-section-title organization-title">
          ORGANIZATION
        </div>

        <nav className="sidebar-nav">
          <div className="nav-item">
            <span>▣</span>
            Company Setup
          </div>

          <div className="nav-item">
            <span>♟</span>
            User Management
          </div>
        </nav>

        <div className="sidebar-bottom">
          <div className="language-row">
            <span>◉</span>
            <span>Language</span>
            <span className="language-value">English⌄</span>
          </div>

          <div className="logout-row">
            <span>↪</span>
            <span>Log out</span>
          </div>

          <div className="sidebar-user">
            <div className="user-avatar small-avatar">R</div>

            <div>
              <div className="sidebar-user-name">Renu Kapoor</div>
              <div className="sidebar-user-role">Super Admin</div>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="main-content">
        {/* TOP BAR */}
        <header className="topbar">
          <div className="search-box">
            <span>⌕</span>
            <input
              placeholder="Search tenants, users, settings, audit logs..."
            />
            <span className="shortcut">⌘K</span>
          </div>

          <div className="topbar-right">
            <span className="top-icon">♧</span>
            <span className="top-icon">◉</span>

            <div className="top-user">
              <div className="user-avatar">R</div>

              <div>
                <div className="top-user-name">Renu Kapoor</div>
                <div className="top-user-role">Super Admin</div>
              </div>

              <span>⌄</span>
            </div>
          </div>
        </header>

        {/* PAGE */}
        <div className="page-container">
          <div className="page-heading">
            <div>
              <h1>Platform Branding</h1>
              <p>
                Configure platform identity, visual assets and security
                settings.
              </p>
            </div>
          </div>

          <div className="content-grid">
            {/* LEFT COLUMN */}
            <div className="left-column">
              {/* PLATFORM IDENTITY */}
              <section className="panel">
                <div className="panel-header">
                  <div>
                    <h2>Platform Identity</h2>
                    <p>Basic Info</p>
                  </div>
                </div>

                <div className="form-group full">
                  <label>
                    Platform Name <span className="required">*</span>
                  </label>

                  <input
                    className={!platformName ? "input-error" : ""}
                    value={platformName}
                    onChange={(e) => setPlatformName(e.target.value)}
                    placeholder="Enter platform name"
                  />

                  {!platformName && (
                    <small className="error-text">
                      Platform name is required
                    </small>
                  )}
                </div>

                <div className="two-column-fields">
                  <div className="form-group">
                    <label>Company Name</label>

                    <input
                      value={companyName}
                      onChange={(e) =>
                        setCompanyName(e.target.value)
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Tagline</label>

                    <input
                      value={tagline}
                      onChange={(e) => setTagline(e.target.value)}
                    />
                  </div>
                </div>

                {/* VISUAL ASSETS */}
                <div className="sub-heading">
                  <h2>Visual Assets</h2>
                </div>

                <div className="asset-item">
                  <div className="asset-title">Company Logo</div>

                  <div className="asset-box">
                    {logoImage ? (
                      <img
                        src={logoImage}
                        alt="Company Logo"
                        className="asset-preview-image"
                      />
                    ) : (
                      <div className="default-company-logo">
                        <span>✣</span>
                        <b>SYNERGY</b>
                        <small>ENTERPRISE SOFTWARE</small>
                      </div>
                    )}

                    <div className="asset-actions">
                      <label className="upload-outline">
                        Upload Logo
                        <input
                          type="file"
                          accept="image/png,image/jpeg,image/svg+xml"
                          hidden
                          onChange={(e) =>
                            uploadImage(e, setLogoImage)
                          }
                        />
                      </label>
                    </div>
                  </div>

                  <small className="help-text">
                    PNG, SVG up to 5MB
                  </small>
                </div>

                {/* FAVICON */}
                <div className="asset-item">
                  <div className="asset-title">Favicon</div>

                  <div className="favicon-row">
                    <div className="favicon-preview-box">
                      {faviconImage ? (
                        <img
                          src={faviconImage}
                          alt="Favicon"
                          className="favicon-image"
                        />
                      ) : (
                        <div className="default-favicon-large">
                          S
                        </div>
                      )}
                    </div>

                    <button
                      className="upload-outline"
                      onClick={() => setShowFaviconModal(true)}
                    >
                      Upload Favicon
                    </button>
                  </div>

                  <small className="help-text">
                    ICO, PNG format supported – 32x32 or 16x16 pixels
                    recommended
                  </small>
                </div>

                {/* EMAIL HEADER */}
                <div className="asset-item">
                  <div className="asset-title">
                    Email Header Logo
                  </div>

                  <div className="email-logo-row">
                    {emailLogo && (
                      <img
                        src={emailLogo}
                        alt="Email Logo"
                        className="email-logo-preview"
                      />
                    )}

                    <label className="upload-outline">
                      {emailLogo ? "Change File" : "Upload File"}

                      <input
                        type="file"
                        accept="image/png,image/jpeg,image/svg+xml"
                        hidden
                        onChange={(e) =>
                          uploadImage(e, setEmailLogo)
                        }
                      />
                    </label>

                    {!emailLogo && (
                      <span className="no-file">
                        No file chosen
                      </span>
                    )}
                  </div>
                </div>

                {/* FOOTER TEXT */}
                <div className="form-group">
                  <label>Footer Text</label>

                  <div className="textarea-wrapper">
                    <textarea
                      value={footerText}
                      maxLength={200}
                      onChange={(e) =>
                        setFooterText(e.target.value)
                      }
                    />

                    <span>
                      {footerText.length}/200
                    </span>
                  </div>
                </div>

                {/* COPYRIGHT */}
                <div className="form-group">
                  <label>Copyright Text</label>

                  <input
                    value={copyrightText}
                    onChange={(e) =>
                      setCopyrightText(e.target.value)
                    }
                  />
                </div>
              </section>

              {/* THEME CONFIGURATION */}
              <section className="panel">
                <div className="panel-header">
                  <div>
                    <h2>Theme Configuration</h2>
                  </div>
                </div>

                <div className="theme-row">
                  <label>Theme</label>

                  <div className="theme-buttons">
                    <button
                      className={
                        theme === "light"
                          ? "theme-btn selected"
                          : "theme-btn"
                      }
                      onClick={() => setTheme("light")}
                    >
                      ☀ Light mode
                    </button>

                    <button
                      className={
                        theme === "dark"
                          ? "theme-btn selected"
                          : "theme-btn"
                      }
                      onClick={() => setTheme("dark")}
                    >
                      ◐ Dark mode
                    </button>
                  </div>
                </div>

                <div className="color-grid">
                  <ColorInput
                    label="Primary Color"
                    value={primaryColor}
                    onChange={setPrimaryColor}
                  />

                  <ColorInput
                    label="Secondary Color"
                    value={secondaryColor}
                    onChange={setSecondaryColor}
                  />

                  <ColorInput
                    label="Accent Color"
                    value={accentColor}
                    onChange={setAccentColor}
                  />
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN */}
            <div className="right-column">
              {/* LOGIN BACKGROUND */}
              <section className="panel">
                <div className="panel-title-row">
                  <div>
                    <h2>Login Background</h2>
                  </div>

                  <label className="change-image">
                    Change Image
                    <input
                      type="file"
                      hidden
                      accept="image/*"
                      onChange={(e) =>
                        uploadImage(e, setBackgroundImage)
                      }
                    />
                  </label>
                </div>

                <div
                  className="login-preview"
                  style={
                    backgroundImage
                      ? {
                          backgroundImage: `url(${backgroundImage})`,
                        }
                      : {}
                  }
                >
                  <div className="login-card">
                    <div className="login-input"></div>
                    <div className="login-input"></div>
                    <div className="login-button"></div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Welcome Message</label>

                  <textarea
                    className="welcome-textarea"
                    value={welcomeMessage}
                    onChange={(e) =>
                      setWelcomeMessage(e.target.value)
                    }
                  />

                  <div className="character-count">
                    {welcomeMessage.length}/500
                  </div>
                </div>
              </section>

              {/* SECURITY */}
              <section className="panel">
                <div className="panel-title-row">
                  <div>
                    <h2>Security & Rules</h2>
                  </div>
                </div>

                <div className="rules-section">
                  <h3>VALIDATION RULES</h3>

                  <div className="rule-item">
                    <span>○</span>
                    <span>
                      Minimum 8 characters
                    </span>
                  </div>

                  <div className="rule-item">
                    <span>○</span>
                    <span>
                      Must include uppercase, lowercase,
                      number
                    </span>
                  </div>

                  <div className="rule-item">
                    <span>○</span>
                    <span>
                      Cannot reuse last five passwords
                    </span>
                  </div>
                </div>

                <div className="security-section">
                  <h3>SECURITY HANDLING</h3>

                  <div className="security-row">
                    <div>
                      <strong>Strong Password Policy</strong>
                      <p>
                        Enforce complex password requirements
                      </p>
                    </div>

                    <button
                      className={
                        strongPassword
                          ? "toggle active"
                          : "toggle"
                      }
                      onClick={() =>
                        setStrongPassword(!strongPassword)
                      }
                    >
                      <span></span>
                    </button>
                  </div>

                  <div className="security-row">
                    <div>
                      <strong>
                        Two Factor Authentication
                      </strong>
                      <p>
                        Add an extra layer of account security
                      </p>
                    </div>

                    <button
                      className={
                        twoFactor
                          ? "toggle active"
                          : "toggle"
                      }
                      onClick={() =>
                        setTwoFactor(!twoFactor)
                      }
                    >
                      <span></span>
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* BOTTOM ACTION BAR */}
      <div className="action-bar">
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
            ◉ Preview
          </button>

          <button
            className="save-btn"
            onClick={saveChanges}
          >
            ▣ Save Changes
          </button>
        </div>
      </div>

      {/* FAVICON MODAL */}
      {showFaviconModal && (
        <div className="modal-overlay">
          <div className="favicon-modal">
            <div className="modal-header">
              <h2>Upload Favicon</h2>

              <button
                className="modal-close"
                onClick={closeFaviconModal}
              >
                ×
              </button>
            </div>

            <div className="modal-divider"></div>

            <div
              className="favicon-dropzone"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                handleFaviconFile(
                  e.dataTransfer.files[0]
                );
              }}
              onClick={() =>
                document
                  .getElementById("faviconInput")
                  .click()
              }
            >
              <div className="upload-circle">
                ⇧
              </div>

              <h3>
                Drag & drop your favicon here
              </h3>

              <p>or click to browse files</p>

              <span>
                ICO, PNG format supported – 32x32 or
                16x16 pixels recommended
              </span>

              <input
                id="faviconInput"
                type="file"
                accept=".png,.ico,image/png,image/x-icon"
                hidden
                onChange={(e) =>
                  handleFaviconFile(
                    e.target.files[0]
                  )
                }
              />
            </div>

            <div className="browser-preview">
              <h4>BROWSER TAB PREVIEW</h4>

              <div className="browser-tab">
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                {faviconPreview ? (
                  <img
                    src={faviconPreview}
                    alt="Favicon"
                    className="favicon-small"
                  />
                ) : (
                  <div className="default-tab-favicon">
                    S
                  </div>
                )}

                <span>Stackly Portal</span>
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="modal-cancel"
                onClick={closeFaviconModal}
              >
                Cancel
              </button>

              <button
                className="modal-upload"
                onClick={handleFaviconUpload}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ColorInput({ label, value, onChange }) {
  return (
    <div className="color-input-group">
      <label>{label}</label>

      <div className="color-input-wrapper">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
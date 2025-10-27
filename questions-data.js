// ============================================================================
// CCNA QUESTIONS DATA INDEX
// Imports all modular section files and exports them as a single array
// ============================================================================

// 🧩 Import section modules
import { FUNDAMENTALS }    from './sections/fundamentals.js';
import { NETWORK_ACCESS }  from './sections/network-access.js';
import { IP_CONNECTIVITY } from './sections/ip-connectivity.js';
import { IP_SERVICES }     from './sections/ip-services.js';
import { SECURITY }        from './sections/security.js';
import { AUTOMATION }      from './sections/automation.js';

// 🧠 Export as a single array for use in questions.html
export const QUESTIONS_SECTIONS = [
  FUNDAMENTALS,
  NETWORK_ACCESS,
  IP_CONNECTIVITY,
  IP_SERVICES,
  SECURITY,
  AUTOMATION,
];

// 🌍 Optional fallback for older browsers or manual testing:
// Uncomment this line only if you are not using <script type="module">
// window.QUESTIONS_SECTIONS = QUESTIONS_SECTIONS;

// ✅ Validation Check (Optional)
// This block helps catch any syntax or missing-section issues early.
(function validateData() {
  try {
    if (!Array.isArray(QUESTIONS_SECTIONS) || QUESTIONS_SECTIONS.length !== 6) {
      console.warn("⚠️ Warning: Expected 6 CCNA sections, found:", QUESTIONS_SECTIONS.length);
    }
    QUESTIONS_SECTIONS.forEach(sec => {
      if (!sec.id || !sec.items || !Array.isArray(sec.items)) {
        console.error(`❌ Invalid section format detected for:`, sec);
      } else {
        console.log(`✅ Loaded section: ${sec.title} (${sec.items.length} questions)`);
      }
    });
  } catch (e) {
    console.error("❌ Error validating questions data:", e);
  }
})();

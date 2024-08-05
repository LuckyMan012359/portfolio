// Personal information
export const NAME = " Rori";
export const PROFESSION = "Full Stack Developer";
export const YEARS_OF_EXPERIENCE = calculateYearsOfExperience();

// Contact information
export const EMAIL = "rorifloris@gmail.com";
export const LINKED_IN_URL = "https://www.linkedin.com/in";
export const GITHUB_URL = "https://github.com/RoriFloris";

// Assets
export const CV_NAME = "RoriFloris.pdf";
export const PROFILE_IMAGE_PATH = "/header.png";

// Helpers
function calculateYearsOfExperience(from = "2017-06-05") {
  return (
    Math.round(
      (Date.now() - Date.parse(from)) / (1000 * 60 * 60 * 24 * 365.25),
    ) || 0
  );
}

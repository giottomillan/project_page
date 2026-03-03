import HomeView from "@/components/views/home-view";

export const metadata = {
  title: "Home",
  description:
    "Giotto Millan portfolio with projects in data science, machine learning, and analytics."
};

export default function EnglishHomePage() {
  return <HomeView lang="en" />;
}

import Introduction from "../../components/text/Text/Introduction.tsx";
import Orb from "../../components/backgrounds/Orb/Orb.tsx";
import Name from "../../components/text/Name/Name.tsx";

const introData = {
    title: "🚀 Cloud Engineer Apprentice & AI Enthusiast",
    subtitle: "AWS | Terraform | DevOps",
    description:
        "Hi, I'm Hadj Rabearimanana, an aspiring Cloud Engineer and AI enthusiast currently pursuing an engineering apprenticeship at IDEMIA. Passionate about cloud technologies, automation, and DevOps, I specialize in AWS infrastructure, Terraform, and scalable architectures. Driven by continuous learning, I have hands-on experience with cloud-native solutions, container orchestration, and security best practices. Whether it's optimizing deployments or building efficient cloud infrastructures, I love turning complex problems into scalable solutions.",
    closing: "📩 Open to opportunities – let’s connect!",
};
export default function Hero() {
    return (
        <>
            <div className="main-container">
                <div className="text-section">
                    <Introduction {...introData} />
                </div>
                <div className="orb-section">
                    <Orb>
                        <Name name={"hadjuse"} />
                    </Orb>
                </div>
            </div>

        </>
    )
}
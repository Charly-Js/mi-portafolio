import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6 my-8">
      <a
        href="https://github.com/Charly-js"
        className="text-gray-400 hover:text-green-500 transition-colors duration-300"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://linkedin.com/in/Charly-js"
        className="text-gray-400 hover:text-green-500 transition-colors duration-300"
      >
        <FaLinkedin size={30} />
      </a>
      
       
    </div>
  )
}


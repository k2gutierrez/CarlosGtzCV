'use client'; 

import React from 'react';
import { 
  Mail, 
  MapPin, 
  Smartphone, 
  Terminal, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code2,
  Download
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

export default function ResumePage() {
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <main 
      className="min-h-screen bg-[#0a0a0a] text-gray-300 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-purple-500/30 print:py-0 print:bg-[#111111]"
      style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}
    >
      {/* PERFECTLY INJECTED STYLE TAG FOR REACT/NEXT.JS */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page { 
            margin: 0; /* Forces the browser to 0 margins, keeping it on one page */
            size: letter portrait; 
          }
          body { 
            -webkit-print-color-adjust: exact; 
            print-color-adjust: exact; 
          }
        }
      `}} />

      <div className="max-w-4xl mx-auto bg-[#111111] border border-gray-800 shadow-2xl rounded-xl overflow-hidden print:border-none print:shadow-none print:max-w-full">
        
        {/* Header Section */}
        <header className="relative border-b border-gray-800 bg-gradient-to-b from-gray-900 to-[#111111] p-10 print:p-5 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"></div>
          
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tight print:text-3xl">
              Carlos E. Gutiérrez
            </h1>
            <p className="mt-3 text-xl font-mono text-purple-400 print:text-sm print:mt-1">
              &gt; Full Stack Blockchain Developer & Solidity Engineer
            </p>
            
            <div className="mt-5 flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-gray-400 font-mono print:mt-2 print:gap-3 print:text-xs">
              <span className="flex items-center gap-1.5"><MapPin size={14} className="print:w-3" /> Guadalajara, MX</span>
              <span className="flex items-center gap-1.5"><Smartphone size={14} className="print:w-3" /> +52 331 893 0280</span>
              <a href="mailto:cchimal.gutierrez@gmail.com" className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
                <Mail size={14} className="print:w-3" /> cchimal.gutierrez@gmail.com
              </a>
            </div>
          </div>

          {/* ACTIONS CONTAINER - Hidden when printing to PDF via print:hidden */}
          <div className="mt-6 sm:mt-0 flex flex-wrap sm:flex-col lg:flex-row justify-center gap-3 print:hidden">
            <div className="flex gap-2 justify-center">
              <a href="https://github.com/k2gutierrez" target="_blank" rel="noreferrer" className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-700 hover:border-gray-500 transition-all text-white flex items-center justify-center">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/carlos-enrique-gutiérrez-chimal" target="_blank" rel="noreferrer" className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-blue-900/50 hover:border-blue-500 transition-all text-white flex items-center justify-center">
                <FaLinkedin size={18} />
              </a>
            </div>

            <div className="flex gap-2 justify-center">
              <a href="https://wa.me/523318930280" target="_blank" rel="noreferrer" className="p-3 bg-green-900/20 border border-green-800/50 rounded-lg hover:bg-green-800/40 hover:border-green-500 transition-all text-green-400 flex items-center justify-center" title="WhatsApp">
                <FaWhatsapp size={18} />
              </a>
              <a href="https://t.me/YOUR_TELEGRAM_USERNAME" target="_blank" rel="noreferrer" className="p-3 bg-blue-900/20 border border-blue-800/50 rounded-lg hover:bg-blue-800/40 hover:border-blue-500 transition-all text-blue-400 flex items-center justify-center" title="Telegram">
                <FaTelegramPlane size={18} />
              </a>
              <button onClick={handlePrint} className="px-4 py-3 bg-purple-900/20 border border-purple-800/50 rounded-lg hover:bg-purple-800/40 hover:border-purple-500 transition-all text-purple-400 flex items-center justify-center gap-2 font-mono text-sm">
                <Download size={18} />
                <span className="hidden sm:inline">Save PDF</span>
              </button>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="p-8 sm:p-10 space-y-12 print:p-5 print:space-y-4">
          
          <section>
            <div className="flex items-center gap-3 mb-4 print:mb-2">
              <Terminal className="text-blue-400 print:w-4" size={24} />
              <h2 className="text-2xl font-bold text-white print:text-lg">Profile Summary</h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg print:text-xs print:leading-normal print:text-gray-300">
              Industrial Engineer and Full Stack Developer with a Master's in Data Science and AI, specializing in Web3. Expertise in engineering secure Solidity smart contracts and building scalable decentralized applications (dApps) using Next.js, Wagmi, and RainbowKit. Proven track record of leading smart contract integrations for Web3 organizations and driving enterprise-level technological solutions.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6 print:mb-2">
              <Code2 className="text-cyan-400 print:w-4" size={24} />
              <h2 className="text-2xl font-bold text-white print:text-lg">Tech Stack</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-3">
              <div className="bg-gray-900/50 border border-gray-800 p-5 rounded-lg print:p-3 print:border-gray-700">
                <h3 className="font-mono text-sm text-gray-500 mb-3 uppercase tracking-wider print:mb-1 print:text-[10px]">Web3 & Blockchain</h3>
                <div className="flex flex-wrap gap-2 text-sm font-mono text-cyan-300 print:gap-1.5">
                  <span className="px-2 py-1 bg-cyan-900/30 border border-cyan-800/50 rounded print:px-1.5 print:py-0 print:text-[10px]">Solidity</span>
                  <span className="px-2 py-1 bg-cyan-900/30 border border-cyan-800/50 rounded print:px-1.5 print:py-0 print:text-[10px]">Foundry</span>
                  <span className="px-2 py-1 bg-cyan-900/30 border border-cyan-800/50 rounded print:px-1.5 print:py-0 print:text-[10px]">Wagmi</span>
                  <span className="px-2 py-1 bg-cyan-900/30 border border-cyan-800/50 rounded print:px-1.5 print:py-0 print:text-[10px]">RainbowKit</span>
                  <span className="px-2 py-1 bg-cyan-900/30 border border-cyan-800/50 rounded print:px-1.5 print:py-0 print:text-[10px]">ZKPs</span>
                </div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 p-5 rounded-lg print:p-3 print:border-gray-700">
                <h3 className="font-mono text-sm text-gray-500 mb-3 uppercase tracking-wider print:mb-1 print:text-[10px]">Frontend & Backend</h3>
                <div className="flex flex-wrap gap-2 text-sm font-mono text-purple-300 print:gap-1.5">
                  <span className="px-2 py-1 bg-purple-900/30 border border-purple-800/50 rounded print:px-1.5 print:py-0 print:text-[10px]">Next.js</span>
                  <span className="px-2 py-1 bg-purple-900/30 border border-purple-800/50 rounded print:px-1.5 print:py-0 print:text-[10px]">React</span>
                  <span className="px-2 py-1 bg-purple-900/30 border border-purple-800/50 rounded print:px-1.5 print:py-0 print:text-[10px]">TypeScript</span>
                  <span className="px-2 py-1 bg-purple-900/30 border border-purple-800/50 rounded print:px-1.5 print:py-0 print:text-[10px]">Supabase</span>
                  <span className="px-2 py-1 bg-purple-900/30 border border-purple-800/50 rounded print:px-1.5 print:py-0 print:text-[10px]">Python</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6 print:mb-2">
              <Briefcase className="text-purple-400 print:w-4" size={24} />
              <h2 className="text-2xl font-bold text-white print:text-lg">Experience</h2>
            </div>
            
            <div className="space-y-8 print:space-y-3 border-l border-gray-800 print:border-gray-600 ml-3 pl-6 relative">
              
              <div className="relative">
                <div className="absolute -left-[33px] print:-left-[31px] top-1.5 print:top-1 h-3 w-3 print:h-2 print:w-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] print:shadow-none"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 print:mb-0.5">
                  <h3 className="text-xl font-bold text-gray-100 print:text-[13px]">Full Stack Blockchain Developer <span className="text-gray-500 font-normal">@ MINGLES NFT</span></h3>
                  <span className="font-mono text-sm text-purple-400 mt-1 sm:mt-0 print:text-[10px]">Jan 2022 – Present</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-gray-400 print:text-gray-300 space-y-1.5 print:space-y-0 print:text-[11px] print:leading-tight">
                  <li>Engineer and deploy secure smart contracts on the Ethereum blockchain using Solidity.</li>
                  <li>Develop and maintain modern, responsive decentralized applications (dApps) using Next.js.</li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -left-[33px] print:-left-[31px] top-1.5 print:top-1 h-3 w-3 print:h-2 print:w-2 rounded-full bg-blue-500"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 print:mb-0.5">
                  <h3 className="text-xl font-bold text-gray-100 print:text-[13px]">Web3 & Smart Contract Dev <span className="text-gray-500 font-normal">@ Comorph3</span></h3>
                  <span className="font-mono text-sm text-blue-400 mt-1 sm:mt-0 print:text-[10px]">Jan 2022 – Feb 2025</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-gray-400 print:text-gray-300 space-y-1.5 print:space-y-0 print:text-[11px] print:leading-tight">
                  <li>Co-founded a specialized development agency delivering end-to-end Web3 projects.</li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -left-[33px] print:-left-[31px] top-1.5 print:top-1 h-3 w-3 print:h-2 print:w-2 rounded-full bg-gray-600"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 print:mb-0.5">
                  <h3 className="text-lg font-bold text-gray-200 print:text-[13px]">Project Manager <span className="text-gray-500 font-normal">@ CEDEM</span></h3>
                  <span className="font-mono text-sm text-gray-500 mt-1 sm:mt-0 print:text-[10px]">May 2020 – Present</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-gray-400 print:text-gray-300 space-y-1.5 print:space-y-0 print:text-[11px] print:leading-tight">
                  <li>Lead internal IT operations, including the architecture of custom management systems.</li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -left-[33px] print:-left-[31px] top-1.5 print:top-1 h-3 w-3 print:h-2 print:w-2 rounded-full bg-gray-600"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 print:mb-0.5">
                  <h3 className="text-lg font-bold text-gray-200 print:text-[13px]">Production Manager <span className="text-gray-500 font-normal">@ Escala Brewery</span></h3>
                  <span className="font-mono text-sm text-gray-500 mt-1 sm:mt-0 print:text-[10px]">Jan 2017 – Jan 2020</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-gray-400 print:text-gray-300 space-y-1.5 print:space-y-0 print:text-[11px] print:leading-tight">
                  <li>Served as production manager and quality engineer, overseeing brewing operations.</li>
                </ul>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[33px] print:-left-[31px] top-1.5 print:top-1 h-3 w-3 print:h-2 print:w-2 rounded-full bg-gray-600"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 print:mb-0.5">
                  <h3 className="text-lg font-bold text-gray-200 print:text-[13px]">Supply Chain Manager <span className="text-gray-500 font-normal">@ ETT'O electronics</span></h3>
                  <span className="font-mono text-sm text-gray-500 mt-1 sm:mt-0 print:text-[10px]">Jan 2016 – Jan 2017</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-gray-400 print:text-gray-300 space-y-1.5 print:space-y-0 print:text-[11px] print:leading-tight">
                  <li>Managed supply chain operations including planning, purchasing, negotiating, and controlling production in the SMT line.</li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -left-[33px] print:-left-[31px] top-1.5 print:top-1 h-3 w-3 print:h-2 print:w-2 rounded-full bg-gray-600"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 print:mb-0.5">
                  <h3 className="text-lg font-bold text-gray-200 print:text-[13px]">Founder <span className="text-gray-500 font-normal">@ Brewhouse</span></h3>
                  <span className="font-mono text-sm text-gray-500 mt-1 sm:mt-0 print:text-[10px]">Aug 2012 – Aug 2017</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-gray-400 print:text-gray-300 space-y-1.5 print:space-y-0 print:text-[11px] print:leading-tight">
                  <li>Founded and operated a business venture featuring a commercial bar and craft beer production.</li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute -left-[33px] print:-left-[31px] top-1.5 print:top-1 h-3 w-3 print:h-2 print:w-2 rounded-full bg-gray-600"></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 print:mb-0.5">
                  <h3 className="text-lg font-bold text-gray-200 print:text-[13px]">Quality Engineer <span className="text-gray-500 font-normal">@ LOMEDIC, S.A. DE C.V.</span></h3>
                  <span className="font-mono text-sm text-gray-500 mt-1 sm:mt-0 print:text-[10px]">Jan 2011 – Jan 2012</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-gray-400 print:text-gray-300 space-y-1.5 print:space-y-0 print:text-[11px] print:leading-tight">
                  <li>Executed internal audits and enforced continuous improvement protocols for ISO9001:2010 compliance.</li>
                </ul>
              </div>

            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 print:gap-4 print:pt-0">
            
            <section>
              <div className="flex items-center gap-3 mb-5 print:mb-2">
                <GraduationCap className="text-blue-400 print:w-4" size={24} />
                <h2 className="text-2xl font-bold text-white print:text-lg">Education</h2>
              </div>
              <div className="space-y-4 print:space-y-2">
                <div className="bg-gray-900/50 border border-gray-800 p-4 rounded-lg print:p-2 print:border-gray-700">
                  <h3 className="font-bold text-gray-100 print:text-[12px]">Master in Blockchain Development</h3>
                  <p className="text-gray-500 text-sm mt-1 print:text-[10px] print:mt-0">Blockchain Accelerator</p>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 p-4 rounded-lg print:p-2 print:border-gray-700">
                  <h3 className="font-bold text-gray-100 print:text-[12px]">B.S. Industrial Engineering</h3>
                  <p className="text-gray-500 text-sm mt-1 print:text-[10px] print:mt-0">Universidad Tecmilenio</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-5 print:mb-2">
                <Award className="text-cyan-400 print:w-4" size={24} />
                <h2 className="text-2xl font-bold text-white print:text-lg">Certifications</h2>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 p-5 rounded-lg h-[calc(100%-44px)] print:p-3 print:h-auto print:border-gray-700">
                <ul className="space-y-3 print:space-y-1.5 text-gray-300 print:text-[11px]">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1 print:mt-0">▹</span> Foundry Fundamentals
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1 print:mt-0">▹</span> Zero-Knowledge Proofs (ZKPs)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1 print:mt-0">▹</span> Cybersecurity (EUNCET, Barcelona)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-1 print:mt-0">▹</span> EF SET English (C1 Advanced)
                  </li>
                </ul>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
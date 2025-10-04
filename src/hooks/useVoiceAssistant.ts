import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const useVoiceAssistant = (language: 'en' | 'hi' | 'kn') => {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      
      // Set language
      const langMap: Record<string, string> = {
        en: 'en-US',
        hi: 'hi-IN',
        kn: 'kn-IN'
      };
      recognitionInstance.lang = langMap[language] || 'en-US';

      recognitionInstance.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        handleVoiceCommand(transcript);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      recognitionInstance.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        toast.error('Voice recognition error. Please try again.');
      };

      setRecognition(recognitionInstance);
    }
  }, [language]);

  const handleVoiceCommand = (command: string) => {
    console.log('Voice command:', command);
    
    // English commands
    if (command.includes('transaction') || command.includes('last') || command.includes('recent')) {
      navigate('/transactions');
      speak('Showing your transactions', language);
    } else if (command.includes('balance') || command.includes('account')) {
      navigate('/');
      speak('Showing your account balance', language);
    } else if (command.includes('send') || command.includes('transfer') || command.includes('pay')) {
      navigate('/send-money');
      speak('Opening send money', language);
    } else if (command.includes('deposit')) {
      navigate('/deposit');
      speak('Opening deposit', language);
    } else if (command.includes('withdraw')) {
      navigate('/withdraw');
      speak('Opening withdrawal', language);
    } else if (command.includes('cheque') || command.includes('check')) {
      navigate('/cheque');
      speak('Opening cheque deposit', language);
    } else if (command.includes('loan')) {
      navigate('/');
      speak('Showing eligible loans', language);
    }
    // Hindi commands
    else if (command.includes('लेन-देन') || command.includes('ट्रांजैक्शन')) {
      navigate('/transactions');
      speak('आपके लेन-देन दिखा रहे हैं', language);
    } else if (command.includes('बैलेंस') || command.includes('खाता')) {
      navigate('/');
      speak('आपका खाता शेष दिखा रहे हैं', language);
    } else if (command.includes('भेजें') || command.includes('पैसे')) {
      navigate('/send-money');
      speak('पैसे भेजना खोल रहे हैं', language);
    }
    // Kannada commands
    else if (command.includes('ವಹಿವಾಟು') || command.includes('ಟ್ರಾನ್ಸಾಕ್ಷನ್')) {
      navigate('/transactions');
      speak('ನಿಮ್ಮ ವಹಿವಾಟುಗಳನ್ನು ತೋರಿಸಲಾಗುತ್ತಿದೆ', language);
    } else if (command.includes('ಬ್ಯಾಲೆನ್ಸ್') || command.includes('ಖಾತೆ')) {
      navigate('/');
      speak('ನಿಮ್ಮ ಖಾತೆ ಬ್ಯಾಲೆನ್ಸ್ ತೋರಿಸಲಾಗುತ್ತಿದೆ', language);
    } else if (command.includes('ಕಳುಹಿಸಿ') || command.includes('ಹಣ')) {
      navigate('/send-money');
      speak('ಹಣ ಕಳುಹಿಸುವುದನ್ನು ತೆರೆಯಲಾಗುತ್ತಿದೆ', language);
    } else {
      speak('Command not recognized. Please try again.', language);
    }
  };

  const speak = (text: string, lang: 'en' | 'hi' | 'kn') => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      const langMap: Record<string, string> = {
        en: 'en-US',
        hi: 'hi-IN',
        kn: 'kn-IN'
      };
      utterance.lang = langMap[lang] || 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const startListening = () => {
    if (recognition) {
      setIsListening(true);
      recognition.start();
    } else {
      toast.error('Voice recognition not supported in this browser');
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  return { isListening, startListening, stopListening };
};

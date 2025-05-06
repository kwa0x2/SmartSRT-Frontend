import { 
  SiVisa, 
  SiMastercard, 
  SiAmericanexpress,
  SiDiscover,
  SiJcb
} from "react-icons/si";
import { CreditCard } from "lucide-react";
import { useEffect, useState } from 'react';

interface CardTypeDetectorProps {
  cardNumber: string;
}

type CardType = {
  type: string;
  icon: JSX.Element;
  pattern: RegExp;
};

const CARD_TYPES: CardType[] = [
  {
    type: 'visa',
    icon: <SiVisa className="h-6 w-auto text-[#1434CB]" />,
    pattern: /^4/
  },
  {
    type: 'mastercard',
    icon: <SiMastercard className="h-6 w-auto text-[#EB001B]" />,
    pattern: /^(5[1-5]|2[2-7][2-9]\d{2})/
  },
  {
    type: 'amex',
    icon: <SiAmericanexpress className="h-6 w-auto text-[#2E77BC]" />,
    pattern: /^3[47]/
  },
  {
    type: 'discover',
    icon: <SiDiscover className="h-6 w-auto text-[#FF6000]" />,
    pattern: /^6(?:011|5)/
  },
  {
    type: 'diners',
    icon: <SiMastercard className="h-6 w-auto text-[#0079BE]" />,
    pattern: /^3(?:0[0-5]|[68])/
  },
  {
    type: 'jcb',
    icon: <SiJcb className="h-6 w-auto text-[#0B4EA2]" />,
    pattern: /^35/
  },
  {
    type: 'unionpay',
    icon: <CreditCard className="h-6 w-auto text-[#DD1F28]" />,
    pattern: /^62/
  },
  {
    type: 'maestro',
    icon: <SiMastercard className="h-6 w-auto text-[#0099DF]" />,
    pattern: /^(5018|5020|5038|6304|6759|6761|6763)/
  },
  {
    type: 'mada',
    icon: <SiMastercard className="h-6 w-auto text-[#000000]" />,
    pattern: /^(4(0(0861|1757|7(197|395)|9201)|1(0685|7633|9593)|2(281(7|8|9)|8(331|67(1|2|3)))|3(1361|2328|4107|9954)|4(0(533|647|795)|5564|6(393|404|672))|5(5(036|708)|7865|8456)|6(2220|854(0|1|2|3))|8(301(0|1|2)|4783|609(4|5|6)|931(7|8|9))|93428)|5(0(4300|8160)|13213|2(1076|4(130|514)|9(415|741))|3(0906|1095|2013|5(825|989)|6023|7767|9931)|4(3(085|357)|9760)|5(4180|7606|8848)|8(5265|8(8(4(5|6|7|8|9)|5(0|1))|98(2|3))|9(005|206)))|6(0(4906|5141)|36120)|9682(0(1|2|3|4|5|6|7|8|9)|1(0|1)))/
  }
];

export function CardTypeDetector({ cardNumber }: CardTypeDetectorProps) {
  const [detectedCard, setDetectedCard] = useState<CardType | null>(null);

  useEffect(() => {
    const detectCardType = (number: string) => {
      const cleanNumber = number.replace(/\s+/g, '');
      return CARD_TYPES.find(card => card.pattern.test(cleanNumber)) || null;
    };

    setDetectedCard(detectCardType(cardNumber));
  }, [cardNumber]);

  if (!detectedCard) return null;

  return (
    <div className="absolute right-3 top-1/2 -translate-y-1/2">
      {detectedCard.icon}
    </div>
  );
} 
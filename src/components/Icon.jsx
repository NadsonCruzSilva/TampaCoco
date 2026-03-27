'use client';
import {
  Bike, ShoppingCart, User, ShieldCheck, Target, HardHat, Ruler,
  Star, Music, Lock, CreditCard,
  MessageCircle, HelpCircle, Mail, Lightbulb, RefreshCw, Wind,
  Mountain, Sprout, Trophy, Building2, Route, Flag, Package,
  Smile, Coins, Zap, Sparkles, Banknote, Gem, Crown, Award,
  Check, X, ChevronRight, Search, Filter, Heart, Minus, Plus,
  Truck, RotateCcw, MapPin, Sun, Moon,
} from 'lucide-react';

const Instagram = ({ size = 24, strokeWidth = 2, className = '', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Facebook = ({ size = 24, strokeWidth = 2, className = '', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Youtube = ({ size = 24, strokeWidth = 2, className = '', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M2.5 7.1c.3-1.4 1.4-2.5 2.8-2.8C8.2 3.8 12 3.8 12 3.8s3.8 0 6.7.5c1.4.3 2.5 1.4 2.8 2.8.5 2.9.5 8.9.5 8.9s0 6-.5 8.9c-.3 1.4-1.4 2.5-2.8 2.8-2.9.5-6.7.5-6.7.5s-3.8 0-6.7-.5c-1.4-.3-2.5-1.4-2.8-2.8C2 16 2 10 2 10s0-6 .5-2.9z"/>
    <path d="m10 15 5-3-5-3v6z"/>
  </svg>
);

const iconMap = {
  Bike, ShoppingCart, User, ShieldCheck, Target, HardHat, Ruler,
  Star, Instagram, Facebook, Youtube, Music, Lock, CreditCard,
  MessageCircle, HelpCircle, Mail, Lightbulb, RefreshCw, Wind,
  Mountain, Sprout, Trophy, Building2, Route, Flag, Package,
  Smile, Coins, Zap, Sparkles, Banknote, Gem, Crown, Award,
  Check, X, ChevronRight, Search, Filter, Heart, Minus, Plus,
  Truck, RotateCcw, MapPin, Sun, Moon,
};

export default function Icon({ name, size = 20, className = '', strokeWidth = 2, ...props }) {
  const LucideIcon = iconMap[name];
  if (!LucideIcon) return null;
  return <LucideIcon size={size} strokeWidth={strokeWidth} className={className} {...props} />;
}

export {
  Bike, ShoppingCart, User, ShieldCheck, Target, HardHat, Ruler,
  Star, Instagram, Facebook, Youtube, Music, Lock, CreditCard,
  MessageCircle, HelpCircle, Mail, Lightbulb, RefreshCw, Wind,
  Mountain, Sprout, Trophy, Building2, Route, Flag, Package,
  Smile, Coins, Zap, Sparkles, Banknote, Gem, Crown, Award,
  Check, X, ChevronRight, Search, Filter, Heart, Minus, Plus,
  Truck, RotateCcw, MapPin, Sun, Moon,
};

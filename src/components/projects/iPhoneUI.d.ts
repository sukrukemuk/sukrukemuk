interface App {
  id: string;
  name: string;
  icon: string;
  screenshots: string[];
  description: string;
}

interface IPhoneUIProps {
  apps: App[];
}

declare const IPhoneUI: React.FC<IPhoneUIProps>;
export default IPhoneUI; 
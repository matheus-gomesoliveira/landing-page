import SanduicheIcon from "../../assets/Sanduiche_Icon.svg"

  interface Props {
    openMenu: () => void;
  }
  
  const Sanduiche = ({ openMenu }: Props) => {
    return <img src={SanduicheIcon} onClick={openMenu} />;
  };

export default Sanduiche
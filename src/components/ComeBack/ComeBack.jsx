import { useNavigate } from "react-router-dom";
import { StyledEnrere } from './ComeBack.styles';

const ComeBack = () => {
  const navigate = useNavigate();

  return <StyledEnrere onClick={() => navigate(-1)}>⬅ ENRERE</StyledEnrere>
}

export default ComeBack;

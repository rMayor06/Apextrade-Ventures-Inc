import { useState } from 'react';

const ConfirmationButton = ({ onConfirm, buttonText, confirmationText }) => {
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setIsConfirmationVisible(false);
  };

  return (
    <div>
      {isConfirmationVisible ? (
        <div>
          <p>{confirmationText}</p>
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={() => setIsConfirmationVisible(false)}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setIsConfirmationVisible(true)}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default ConfirmationButton;
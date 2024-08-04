type UseModalReturn = {
  isModalVisible: { value: boolean };
  openModal: () => void;
  closeModal: () => void;
};

export function useModal(): UseModalReturn {
  const isModalVisible = useState("isModalVisible", () => false);

  const openModal = () => {
    isModalVisible.value = true;
  };

  const closeModal = () => {
    isModalVisible.value = false;
  };

  return {
    isModalVisible,
    openModal,
    closeModal,
  };
}

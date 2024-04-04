interface ModalProps{
    modalOpen: boolean;
    setModalOpen:  (open: boolean) => boolean | void;
    children: React.ReactNode
}
const Modal: React.FC<ModalProps> = ({modalOpen, setModalOpen, children}) => {
    return(
        <div className={`modal ${modalOpen ? "modal-open":""}`}>
            <div className="modal-box relative bg-gray-900"> 
            <label
            onClick={()=>setModalOpen(false)}
            className="btn btn-sm btn-circle absolute right-2 top-2 text-white bg-gray-700">x</label>
            {children}
    </div>
</div>
    )
}
export default Modal
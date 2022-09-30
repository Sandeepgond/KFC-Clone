import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    useDisclosure,
    ModalCloseButton
  } from "@chakra-ui/react";
  import "./LocationModal.css"
  import {FaMapMarkerAlt} from "react-icons/fa"
  export function LocationModal() {
    const { isOpen,onOpen,onClose}=useDisclosure();
    return (
      <>
        <div className="max-width"><Button className="modification" onClick={onOpen}> <p><FaMapMarkerAlt/>  Start an order for pickup or delivery</p></Button> </div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent >
            
            <ModalBody className="overlay">
            <ModalHeader className="start">Start Your Order <ModalCloseButton className="cross"/></ModalHeader> &nbsp; <hr />
              <div>
                <h1>LET'S GET STARTED. WOULD YOU LIKE PICKUP OR DELIVERY?</h1>
                <p>Menu availability and pricing may vary between order types.</p>
              </div>
              <ModalFooter className="btn-adjust">
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Delivery</Button>
            </ModalFooter>
            </ModalBody>  
            
          </ModalContent>
        </Modal>
      </>
    );
  }
  
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
import { FaInfoCircle } from "react-icons/fa";
  import "./LocationModal.css"
  import "./LocationMatersModal.css"

  export function LocationMatersModal() {
    const { isOpen,onOpen,onClose}=useDisclosure();
    return (
      <>
        <Button id="i" onClick={onOpen}><FaInfoCircle/></Button> 
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay className="background"/>
          <ModalContent >
            
            <ModalBody className="overlay">
            <ModalHeader><ModalCloseButton id="cross1" className="cross"/></ModalHeader>  <hr />
              <div>
                <h1>Location Matters</h1>
                <p>Please set your location to view accurate pricing, find nearby restaurants, and see local deals.</p>
              </div>
              <ModalFooter className="btn-adjust" id="btn-adjust1">
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Dismiss
              </Button>
              <Button variant="ghost" id="black">Set My Location </Button>
            </ModalFooter>
            </ModalBody>  
            
          </ModalContent>
        </Modal>
      </>
    );
  }
  
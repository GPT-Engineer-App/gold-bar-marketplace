// TP Jewellery Brand Website
import { Box, Flex, Text, Button, Image, Heading, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaShoppingCart, FaMoneyBillWave, FaGem } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" bg="gold" p={3}>
        <Heading as="h1" size="lg" color="white">
          TP Jewellery
        </Heading>
        <HStack spacing={4}>
          <Button leftIcon={<Icon as={FaShoppingCart} />} colorScheme="whiteAlpha">
            Cart
          </Button>
          <Button leftIcon={<Icon as={FaMoneyBillWave} />} colorScheme="whiteAlpha">
            Transactions
          </Button>
        </HStack>
      </Flex>

      <VStack spacing={8} mt={10}>
        <Box>
          <Image src="https://images.unsplash.com/photo-1610375461246-83df859d849d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnb2xkJTIwYmFyc3xlbnwwfHx8fDE3MTQyMTU0Nzh8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" maxW="500px" />
          <Text fontSize="2xl" mt={2} fontWeight="bold">
            Gold Bars 99.99
          </Text>
          <Text fontSize="md">High purity gold bars perfect for investment and collection.</Text>
          <Button mt={4} leftIcon={<Icon as={FaGem} />} colorScheme="yellow">
            Buy Now
          </Button>
        </Box>

        <Box>
          <Image src="https://images.unsplash.com/photo-1629212093109-354efe3fc541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqZXdlbGxlcnklMjBzdG9yZXxlbnwwfHx8fDE3MTQyMTU0Nzh8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" maxW="500px" />
          <Text fontSize="2xl" mt={2} fontWeight="bold">
            Visit Our Store
          </Text>
          <Text fontSize="md">Explore our exclusive collection in person.</Text>
          <Button mt={4} leftIcon={<Icon as={FaGem} />} colorScheme="yellow">
            Get Directions
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;

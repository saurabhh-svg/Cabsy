import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Map from "./components/map";
import Link from "next/link";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  }, []);

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" />

          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage
              src={user && user.photoURL}
              onClick={() => signOut(auth)}
            />
          </Profile>
        </Header>

        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2StFZx3qwGa4NvjcHYGZ4h9ncgwGceKopWQ&usqp=CAU" />
              Ride
            </ActionButton>
          </Link>

          <ActionButton>
            <ActionButtonImage src="https://thumbs.dreamstime.com/b/motorcycle-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-133733713.jpg" />
            Moto
          </ActionButton>

          <ActionButton>
            <ActionButtonImage src="https://media.istockphoto.com/vectors/calender-icon-vector-logo-template-vector-id1258056366?k=20&m=1258056366&s=612x612&w=0&h=WuF-JA4BdGvz04cL9YGpZlE6EJFtdbHoOi0l6_3IeZ8=" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col h-screen
`;

const ActionItems = tw.div`
flex-1 p-4
`;

const Header = tw.div`flex justify-between items-center`;

const UberLogo = tw.img`
h-20
`;

const Profile = tw.div`
flex items-center 
`;

const Name = tw.div`mr-4 w-20 text-sm font-semibold`;

const UserImage = tw.img`h-12 w-12 rounded-full border-gray-200 p-px cursor-pointer`;

const ActionButtons = tw.div`flex `;

const ActionButton = tw.div`bg-gray-200 flex flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl`;

const ActionButtonImage = tw.img`h-3/5`;

const InputButton = tw.div`h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8`;

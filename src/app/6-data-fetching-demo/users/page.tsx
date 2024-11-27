import UserCard from "@/components/users-component/user-card";

export default async function UserPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const userData = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = await userData.json();
  return (
    <div>
      <h1>User Page</h1>
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-wrap justify-center">
          {data.map((item) => (
            <UserCard key={item.id} params={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

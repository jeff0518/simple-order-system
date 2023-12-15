import axios from "axios";

interface MemberProps {
  phoneNumber: string;
  name?: string;
  newName?: string;
  count?: string;
  point?: string;
  newDate?: string;
  newPoint?: string;
  // spendingRecords?: [
  //   {
  //     newDate: string;
  //     newPoint: string;
  //   }
  // ];
}

export async function createMember(phoneNumber: string) {
  try {
    const response = await axios.post("/api/member/addNewMember", {
      phoneNumber,
    });
    const data = response.data;

    if (response.status >= 200 && response.status < 300) {
      return data;
    } else {
      throw new Error(data.message || "Something went wrong");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
}

export async function getMemberData(phoneNumber: string) {
  try {
    const { data } = await axios.get(`/api/member/${phoneNumber}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createNewSpending({
  phoneNumber,
  newDate,
  newPoint,
}: MemberProps) {
  try {
    const { data } = await axios.post("/api/member/addNewSpending", {
      phoneNumber,
      newDate,
      newPoint,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

// export async function postMember({ phoneNumber }: MemberProps) {
//   try {
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function patchMemberData({ phoneNumber, newName }: MemberProps) {
  try {
    const { data } = await axios.patch(`/api/member/${phoneNumber}`, {
      newName,
      phoneNumber,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

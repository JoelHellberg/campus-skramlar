"use server";

import {
  fetchDataRow,
  updateDataTableRow,
} from "../_lib/supabase/adminFunctions";

export async function updateMoney(sum_in: number, password_in: string) {
  const dataRowValues = await fetchDataRow("privateData", "id", "0");
  console.log("updateMoney LOG: dataRowValues: ", dataRowValues);

  const robot_password = dataRowValues?.robot_password;
  if (password_in === robot_password) {
    const generalData = await fetchDataRow("generalData", "id", "0");
    console.log("updateMoney LOG: generalData: ", generalData);

    generalData.money_collected = sum_in;
    await updateDataTableRow("generalData", "id", "0", generalData);
  }
}

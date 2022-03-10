import { useTranslation } from "react-i18next";
import { AnyObject } from "yup/lib/types";
import { TestFunction } from "yup/lib/util/createValidation";

export interface IYupTest<TCast, TContext> {
  name: string,
  test: TestFunction<TCast, TContext>
}

const now: Date = new Date(new Date().toDateString());

export const dateInTheFutureValidator: IYupTest<string | undefined, AnyObject> = {
  name: 'ensure_date_in_future',
  test: (date) => {
    const parsedDate = new Date(date!);
    if (parsedDate >= now) return true;
    return false;
  }
};

export const dateStringValidator: IYupTest<string | undefined, AnyObject> = {
  name: 'ensure_date_valid',
  test: (date) => {
    if (date === '' || date === null || date === undefined) return false;

    return true;
  }
};

/**
 * Validates if availability_interval_from is before availability_interval_to
 */
 export const dateRangeValidator: IYupTest<string | undefined, AnyObject> = {
  name: 'ensure_range_valid',
  test: function (value) {
    const availability_interval_from: string = this.parent.availability_interval_from;
    return availability_interval_from < value!; // todo check here
  }
};

import { Input } from "@chakra-ui/react";

const CompanyForm = ({
  onSubmit,
  register,
  handleSubmit,
  formState: { errors },
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        size="lg"
        {...register("company", { required: true })}
        placeholder="Your company*"
        color={errors.company ? "red" : "black"}
        _placeholder={{ color: errors.company ? "red" : undefined }}
      />

      <Input
        {...register("name", { required: true })}
        placeholder="Your First and Last Name*"
        color={errors.name ? "red" : "black"}
        _placeholder={{ color: errors.name ? "red" : undefined }}
      />

      <Input
        {...register("website", { required: true })}
        placeholder="Company Website*"
        color={errors.website ? "red" : "black"}
        _placeholder={{ color: errors.website ? "red" : undefined }}
      />

      <Input
        {...register("address", { required: true })}
        placeholder="Company Address*"
        color={errors.address ? "red" : "black"}
        _placeholder={{ color: errors.address ? "red" : undefined }}
      />
      <Input
        {...register("location", { required: true })}
        placeholder="City, State ZIP*"
        color={errors.location ? "red" : "black"}
        _placeholder={{ color: errors.location ? "red" : undefined }}
      />
      <Input {...register("country")} placeholder="Country" />
      <Input
        {...register("phone", { required: true })}
        placeholder="Phone No.*"
        color={errors.phone ? "red" : "black"}
        _placeholder={{ color: errors.phone ? "red" : undefined }}
      />
      <Input
        {...register("email", {
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          },
        })}
        placeholder="Email address*"
        color={errors.email ? "red" : "black"}
        _placeholder={{ color: errors.email ? "red" : undefined }}
      />
    </form>
  );
};

CompanyForm.displayName = "CompanyForm";

export default CompanyForm;

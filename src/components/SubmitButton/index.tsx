type Props = {
  pending: boolean;
};

export const SubmitButton = ({ pending }: Props) => {
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'pending' : 'submit'}
    </button>
  );
};

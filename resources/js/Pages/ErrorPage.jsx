export default function ErrorPage({ status }) {
  const title = {
    503: '503: Service Unavailable',
    500: '500: Server Error',
    404: '404: Page Not Found',
    403: '403: Forbidden',
  }[status];

  const description = {
    503: 'Sorry, we are doing some maintenance. Please check back soon.',
    500: 'Whoops, something went wrong on our servers.',
    404: 'Sorry, the page you are looking for could not be found.',
    403: 'Sorry, you are forbidden from accessing this page.',
  }[status];

  return (
    <Guest>
      <div className="min-h-screen flex justify-center items-center text-center">
        <h4 className="text-2xl text-primary font-bold mb-4">{title}</h4>
        <div>{description}</div>
      </div>
    </Guest>
  );
}

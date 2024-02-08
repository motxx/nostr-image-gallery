export class ErrorWithDetails extends Error {
  constructor(
    message: string,
    public details: Error
  ) {
    super(`${message}: ${details.message}`);
  }
}

export class UserFailedToLoginError extends ErrorWithDetails {
  constructor(details: Error) {
    super("User failed to login", details);
  }
}

export class UserFailedToGetSettingsError extends ErrorWithDetails {
  constructor(details: Error) {
    super("User failed to get settings", details);
  }
}

export class UserFailedToUpdateSettingsError extends ErrorWithDetails {
  constructor(details: Error) {
    super("User failed to update settings", details);
  }
}

export class ContentFailedToGetError extends ErrorWithDetails {
  constructor(details: Error) {
    super("Content failed to get", details);
  }
}

export class ContentFailedToUpdateError extends ErrorWithDetails {
  constructor(details: Error) {
    super("Content failed to update", details);
  }
}

export class WalletNotConnectedError extends Error {
  constructor() {
    super("Wallet not connected");
  }
}